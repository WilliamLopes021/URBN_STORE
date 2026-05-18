import { useRef, useState } from "react";

export const OtpInput = () => {
  const size = 6;

  const [otp, setOtp] = useState<string[]>(Array(size).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const isValidChar = (value: string) => /^[a-zA-Z0-9]$/.test(value);

  const focusInput = (index: number) => {
    inputRefs.current[index]?.focus();
  };

  const handleChange = (index: number, value: string) => {
    const char = value.slice(-1);

    if (!isValidChar(char)) return;

    const upper = char.toUpperCase();

    setOtp((prev) => {
      const next = [...prev];
      next[index] = upper;
      return next;
    });

    if (index < size - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    const key = e.key;

    if (key === "ArrowLeft" && index > 0) {
      focusInput(index - 1);
    }

    if (key === "ArrowRight" && index < size - 1) {
      focusInput(index + 1);
    }

    if (key === "Backspace") {
      e.preventDefault();

      setOtp((prev) => {
        const next = [...prev];

        if (next[index]) {
          next[index] = "";
        } else if (index > 0) {
          next[index - 1] = "";
          focusInput(index - 1);
        }

        return next;
      });
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .slice(0, size - index)
      .split("")
      .filter(isValidChar)
      .map((c) => c.toUpperCase());

    setOtp((prev) => {
      const next = [...prev];

      pasted.forEach((char, i) => {
        next[index + i] = char;
      });

      return next;
    });

    const nextFocus = Math.min(index + pasted.length, size - 1);
    focusInput(nextFocus);
  };

  return (
    <div className="flex gap-3">
      {otp.map((value, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          value={value}
          maxLength={1}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={(e) => handlePaste(e, index)}
          className="uppercase w-12 h-14 text-center text-text-primary font-black text-xl bg-card border border-border rounded focus:outline-none focus:border-accent-blue focus:shadow-glow-blue"
        />
      ))}
    </div>
  );
};
