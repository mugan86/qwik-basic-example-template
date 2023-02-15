import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>Second page</h1>
      <p>Content second page</p>
      <Link href='/'>Home</Link>
    </div>
  );
});
