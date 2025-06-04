import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import { graphql } from "gatsby";
import {
  Accordion,
  Button,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  margin-top: 100px;
`;

const IFrameContainer = styled(Container)`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
`;

const ResponsiveIFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const sortedVideosForChapter = (videos, chapter_number) =>
  videos
    .filter((video) => video.node.chapter_number === chapter_number)
    .sort((a, b) => a.node.episode - b.node.episode);

const Chapters = ({ data }) => {
  const chapters = data?.allMongodbPythonsinhalaChapter.edges;
  const videos = data?.allMongodbPythonsinhalaVideo.edges;
  const firstVideo = videos.filter(
    (video) => video.node.chapter_number === 0 && video.node.episode === 0,
  );
  const sortedChapters = chapters.toSorted(
    (a, b) => a.node.chapter_number - b.node.chapter_number,
  );
  const [selectedVideo, setSelectedVideo] = React.useState(firstVideo[0]);
  return (
    <>
      <NavBar />
      <StyledContainer fluid>
        <Row>
          <Col md={3}>
            <Accordion defaultActiveKey="0">
              {sortedChapters.map(({ node }) => (
                <Accordion.Item eventKey={node.chapter_number}>
                  <Accordion.Header>{node.name}</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup>
                      {sortedVideosForChapter(videos, node.chapter_number).map(
                        (video) => (
                          <ListGroup.Item>
                            <Container onClick={() => setSelectedVideo(video)}>
                              <Button variant="light">{video.node.name}</Button>
                            </Container>
                          </ListGroup.Item>
                        ),
                      )}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
          <Col md={9}>
            <IFrameContainer fluid>
              <ResponsiveIFrame
                title="Current Video"
                src={`${selectedVideo.node.url}?modestbranding=1`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></ResponsiveIFrame>
            </IFrameContainer>
          </Col>
        </Row>
      </StyledContainer>
      <Footer />
    </>
  );
};
export default Chapters;

export const Head = () => <title>PythonSinhala: Chapters</title>;

export const mongoCloudVideosQueryAndMongoCloudChaptersQuery = graphql`
  query MongoCloudChaptersAndVideoQuery {
    allMongodbPythonsinhalaChapter {
      edges {
        node {
          id
          name
          chapter_number
        }
      }
    }

    allMongodbPythonsinhalaVideo {
      edges {
        node {
          id
          name
          url
          episode
          description
          chapter_number
        }
      }
    }
  }
`;
