import { useFormContext } from "react-hook-form";

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  options?: string[];
}

const FormInput = ({ label, name, type = "text", options }: FormInputProps) => {
  const { register, formState: { errors }} = useFormContext();

  return (
    <div className="flex flex-col mb-4">
      <label className="text-gray-700 font-medium mb-1">{label}</label>
      
      {options ? (
        <select
          {...register(name)} 
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        >
          <option value="" disabled selected>
            Selecione
          </option> {/* Placeholder */}
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          {...register(name)}
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        />
      )}

      {errors[name] && (
        <span className="text-red-500 text-sm">{String(errors[name]?.message)}</span>
      )}
    </div>
  );
};

export default FormInput;
