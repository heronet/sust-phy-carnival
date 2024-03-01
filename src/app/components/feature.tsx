import { Button } from "@/components/ui/button";

type Props = {
  logoRight: boolean;
};

export default function Feature({ logoRight }: Props) {
  return (
    <div
      className={`flex gap-6 p-8 my-4 items-center max-w-screen-xl mx-auto border rounded-lg ${
        logoRight ? "flex-row-reverse" : ""
      }`}
    >
      <img src="/images/oly.png" alt="" className="w-64" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl">Physics Olympiad</h1>
        <p className="text-muted-foreground">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
          blanditiis excepturi maiores assumenda autem? Ullam, id corporis! Vel
          voluptates veniam ab ratione, blanditiis magni neque, maiores ipsum
          autem reprehenderit asperiores!
        </p>
        <div>
          <Button variant={"default"}>Participate!</Button>
        </div>
      </div>
    </div>
  );
}
