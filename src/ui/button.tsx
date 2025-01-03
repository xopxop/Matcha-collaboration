interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bgColor?: 'grey' | 'pink-gradient' | null;
  shadow?: boolean;
}

export const Button = ({ children, bgColor = null, disabled, shadow = false, ...rest }: ButtonProps) => {
  return (
    <>
    <button
    {...rest}
    disabled={disabled}
    className={`flex flex-col p-3 uppercase font-bold w-full items-center rounded-full text-sm
      ${shadow && 'drop-shadow-md'}
      ${disabled && 'text-[#E9EBF0] bg-[#FCFCFE]'}
      ${!disabled && bgColor && bgColor === 'pink-gradient' && 'bg-gradient-to-tr from-[#EA4080] to-[#EE805F] text-white'}
      ${!disabled && bgColor && bgColor === 'grey' &&'bg-slate-200 text-slate-600'}`}
    >
    {children}
    </button>
    </>
  );
}