import Card from 'react-bootstrap/Card';

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant='top'
        src='https://avatars.githubusercontent.com/u/67991540?s=96&v=4'
      />
      <Card.Body>
        <Card.Title>DigiTones</Card.Title>
        <Card.Text>
          A Blurb about DigiTones is that I tell a pc what to do and SOMETIMES
          it listens
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;