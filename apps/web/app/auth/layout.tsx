export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <main className="w-full h-[calc(100vh-64px)] bg-gradient-to-tl from-rose-100 to-teal-100 items-center justify-center flex">
      {children}
    </main>
  );
}
