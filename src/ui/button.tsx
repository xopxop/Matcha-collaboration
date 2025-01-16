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
    className={`flex flex-col h-12 uppercase font-bold w-full items-center justify-center rounded-full text-sm
      ${shadow && 'drop-shadow-md'}
      ${disabled && 'text-gray-400 bg-gray-100'}
      ${!disabled && bgColor && bgColor === 'pink-gradient' && 'bg-gradient-to-tr from-[#EA4080] to-[#EE805F] text-white'}
      ${!disabled && bgColor && bgColor === 'grey' &&'bg-slate-200 text-slate-600'}`}
    >
    {children}
    </button>
    </>
  );
}