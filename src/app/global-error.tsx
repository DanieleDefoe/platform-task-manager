'use client';

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: Props) {
  return (
    <html>
      <body>
        <h2>Что-то пошло не так...</h2>
        <button onClick={() => reset()}>Повторить</button>
      </body>
    </html>
  );
}
