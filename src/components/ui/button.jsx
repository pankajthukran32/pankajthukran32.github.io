export function Button({ children, variant = 'default', ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded text-sm font-medium border ${variant === 'outline' ? 'border-gray-300 bg-white text-black' : 'bg-indigo-600 text-white'}`}
      {...props}
    >
      {children}
    </button>
  );
}