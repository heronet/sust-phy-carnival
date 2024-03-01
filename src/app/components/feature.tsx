import { Button } from "@/components/ui/button";

type Props = {
  logoRight: boolean;
  title: string;
  // description: string;
  imageUrl: string;
};

export default function Feature({ logoRight, title, imageUrl }: Props) {
  return (
    <div className="px-4">
      <div
        className={`flex flex-col gap-6 p-8 my-4 sm:flex-row items-center max-w-screen-xl mx-auto border rounded-lg ${
          logoRight ? "sm:flex-row-reverse" : ""
        }`}
      >
        <img src={imageUrl} alt="" className="w-64" />
        <div className="flex flex-col gap-4 items-center sm:items-start ">
          <h1 className="text-3xl">{title}</h1>
          <p className="text-muted-foreground">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
            blanditiis excepturi maiores assumenda autem? Ullam, id corporis!
            Vel voluptates veniam ab ratione, blanditiis magni neque, maiores
            ipsum autem reprehenderit asperiores!
          </p>
          <div>
            <Button variant={"default"}>Participate!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
