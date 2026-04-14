type FieldProps = {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  required?: boolean;
  input: React.ReactNode;
};

export const inputClassName = "input-base text-base";

export function Field({
  label,
  name,
  error,
  hint,
  required = false,
  input,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="label-base">
        {label}{" "}
        {required ? <span className="label-note text-brand">*</span> : null}
      </label>
      {input}
      {hint ? <p className="mt-2 text-sm text-muted">{hint}</p> : null}
      {error ? <p className="mt-2 text-sm font-medium text-[#a53b31]">{error}</p> : null}
    </div>
  );
}

type StatusMessageProps = {
  type: "success" | "error";
  message: string;
};

export function StatusMessage({ type, message }: StatusMessageProps) {
  return (
    <div
      className={type === "success" ? "status-success" : "status-error"}
      aria-live="polite"
    >
      {message}
    </div>
  );
}
