import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Column, Grid, Row, Content } from 'carbon-components-react';

const HomeContent = () => {
  const navigate = useNavigate();
  const toMovies = () => navigate('/movies');
  const toSeries = () => navigate('/series');
  return (
    <div className="home">
      <Content className="dark-mode">
        <Grid condensed>
          <Row>
            <Column
              onClick={toMovies}
              lg={6}
              md={6}
              sm={12}
              className="home__panel"
              style={{ backgroundImage: "url('/assets/movies.png')" }}
            >
              <div className="home__title">
                <h2>Movies</h2>
              </div>
            </Column>
            <Column
              onClick={toSeries}
              lg={6}
              md={6}
              sm={12}
              className="home__panel"
              style={{ backgroundImage: "url('/assets/series.png')" }}
            >
              <div className="home__title">
                <h2>Series</h2>
              </div>
            </Column>
          </Row>
        </Grid>
      </Content>
    </div>
  );
};

export default HomeContent;
