import Image from "next/image";


export default function ProfileImage() {
  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-primary/10 to-accent/30">
      <Image
        src="/mr-dele.jpg"
        alt="Mr Dele"
        fill
        className="object-cover rounded-2xl"
        priority
        style={{
          objectPosition: "center top",
        }}
      />
    </div>
  );
}