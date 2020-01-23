export const style = <style jsx>{`
  h1,
  a {
    font-family: 'Arial';
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
    margin: 5px 0;
  }

  a {
    text-decoration: none;
    color: blue;
  }

  a:hover {
    opacity: 0.6;
  }

  p {
    color: red;
  }

  @media(max-width: 800px){
    body {
      color: red;
    }
  }
`}</style>