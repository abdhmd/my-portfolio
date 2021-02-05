
import Work from '../components/Work'

function works({data}) {
  return (
    <section>
      <h1>my works</h1>
     <Work repos={data}/>
    </section>
  );
}

export default works;

export async function getStaticProps(context) {
  const res = await fetch(`https://api.github.com/users/abdhmd/repos`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  }
}
