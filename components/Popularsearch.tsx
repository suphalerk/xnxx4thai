import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
      <p>ผลการค้นหาสูงสุด</p>

      </Container>
    </React.Fragment>
  );
}
