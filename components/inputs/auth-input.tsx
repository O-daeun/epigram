import Image from 'next/image';
import { InputHTMLAttributes, forwardRef, useState } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
}

const AuthInput = forwardRef<HTMLInputElement, Props>(function AuthInput(
  { type = 'text', placeholder, className = '', error, ...rest },
  ref,
) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={className}>
      <div className="relative">
        <input
          type={type !== 'password' ? type : isVisible ? 'text' : 'password'}
          ref={ref}
          className={`flex h-16 w-full items-center rounded-xl bg-var-blue-200 px-4 text-xl outline-none placeholder:text-var-blue-400 ${error ? 'border border-var-error' : ''}`}
          placeholder={placeholder}
          {...rest}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            tabIndex={-1}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <Image
              src={isVisible ? '/visibility-on.svg' : '/visibility-off.svg'}
              alt="눈 아이콘"
              width={24}
              height={24}
            />
          </button>
        )}
      </div>
      {error && <p className="pl-2 leading-[162.5%] text-var-error">{error}</p>}
    </div>
  );
});

export default AuthInput;
