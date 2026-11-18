import Image from "next/image";

export default function EmptyState() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <Image src="/images/train.png" alt="Train" width={120} height={120} />

      <div className="h-1 w-16 bg-green-500" />

      <p className="text-center text-gray-700 text-lg">
        It's time to book your future trip.
      </p>
    </div>
  );
}
