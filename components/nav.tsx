import ThemeSwitcher from "./theme-switcher";

export default function Nav() {
  return (
    <nav className="flex justify-around p-4">
      <div className="">Vinay Kulkarni</div>
      <div className="">
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
