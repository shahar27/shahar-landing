type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function PrimaryButton({ children, onClick }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-[1.2rem] bg-[#9E7D55] px-9 py-3.5 text-base text-white shadow-[0_6px_16px_rgba(76,61,46,0.12)] transition hover:-translate-y-0.5 hover:bg-[#8D6F4B] active:translate-y-0"
    >
      {children}
    </button>
  );
}