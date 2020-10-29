import Landing from "../components/landing";
import { ComponentContextProvider } from "../components/ComponentContext";

export default function Home() {
  return (
    <ComponentContextProvider className="flex flex-row w-full h-full bg-gray-100">
      <Landing />
    </ComponentContextProvider>
  );
}
