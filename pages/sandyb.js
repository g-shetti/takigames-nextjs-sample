const Sandyb = () => {
  return null;
};

export async function getServerSideProps({ res }) {
  res.writeHead(302, {
    Location: "/?g1=g139",
  });
  res.end();

  return { props: {} };
}

export default Sandyb;
