type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function PrimaryButton({ children, onClick }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full bg-[#A78C64] px-10 py-4 text-lg text-white shadow-[0_10px_24px_rgba(76,61,46,0.16)] transition hover:-translate-y-0.5 hover:bg-[#927852] active:translate-y-0"
    >
      {children}
    </button>
  );
}