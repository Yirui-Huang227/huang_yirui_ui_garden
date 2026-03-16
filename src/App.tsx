import React from "react";
import styled from "styled-components";

import {
  Button,
  Label,
  Card,
  Dropdown,
  RadioButton,
  Img,
  HeroImage,
  Table,
  TableHeader,
  TableRow,
  TableFooter,
  TableCell,
  Text
} from "./components";

const Page = styled.div`
  padding: 2rem;
  font-family: Arial, sans-serif;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

function App() {
  return (
    <Page>
      <h1>UI Component Library - UI Garden</h1>

      {/* Hero Image */}
      <Section>
        <Title>Hero Image</Title>
        <HeroImage
          src="https://placehold.co/1920x800/000000/FFF"
          alt="Hero"
        />
      </Section>
      <Section>
        <Title>Hero Image Disabled</Title>
        <HeroImage disabled
          src="https://placehold.co/1920x800/000000/FFF"
          alt="Hero"
        />
      </Section>
      {/* Buttons */}
      <Section>
        <Title>Buttons</Title>
        <Grid>
          <Button label="Primary Button" />
          <Button label="Disabled Button" disabled />
        </Grid>
      </Section>

      {/* Labels & Text */}
      <Section>
        <Title>Label & Text</Title>
        <Grid>
          <Label text="Default Label" />
          <Label text="Disabled Label" disabled />
        </Grid>

        <Text content="This is a text component." />
        <Text content="Disabled text example." disabled />
      </Section>

      {/* Card */}
      <Section>
        <Title>Card</Title>
        <Card title="Card Title" content="This is a simple card component." />
        <Card
          title="Disabled Card"
          content="This card is disabled."
          disabled
        />
      </Section>

      {/* Dropdown */}
      <Section>
        <Title>Dropdown</Title>
        <Dropdown
          options={["Option 1", "Option 2", "Option 3"]}
        />
        <Dropdown
          options={["Disabled 1", "Disabled 2"]}
          disabled
        />
      </Section>

      {/* Radio Button */}
      <Section>
        <Title>Radio Button</Title>
        <RadioButton label="Option A"  />
        <RadioButton label="Disabled Option"  disabled />
      </Section>

      {/* Image */}
      <Section>
        <Title>Image</Title>
        <Img
          src="https://placehold.co/600x400/000000/FFF"
          alt="Sample"
        />
        <Img
          src="https://placehold.co/600x400/000000/FFF"
          alt="Disabled"
          disabled
        />
      </Section>

      {/* Table */}
      <Section>
        <Title>Table</Title>
        <Table >
          <TableHeader>
            <TableRow>
              <TableCell>Header 1</TableCell>
              <TableCell>Header 2</TableCell>
              <TableCell>Header 3</TableCell>
            </TableRow>
          </TableHeader>

          <tbody>
            <TableRow>
              <TableCell>Row 1</TableCell>
              <TableCell>Data 1</TableCell>
              <TableCell>Data 2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Row 2</TableCell>
              <TableCell>Data 3</TableCell>
              <TableCell>Data 4</TableCell>
            </TableRow>
          </tbody>

          <TableFooter>
            <TableRow>
              <TableCell>Footer</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>2 Items</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <Title>Table Disabled</Title>
        <Table>
          <TableHeader disabled>
            <TableRow disabled>
              <TableCell disabled>Header 1</TableCell>
              <TableCell disabled>Header 2</TableCell>
              <TableCell disabled>Header 3</TableCell>
            </TableRow>
          </TableHeader>

          <tbody>
            <TableRow disabled>
              <TableCell disabled>Row 1</TableCell>
              <TableCell disabled>Data 1</TableCell>
              <TableCell disabled>Data 2</TableCell>
            </TableRow>
            <TableRow disabled>
              <TableCell disabled>Row 2</TableCell>
              <TableCell disabled>Data 3</TableCell>
              <TableCell disabled>Data 4</TableCell>
            </TableRow>
          </tbody>

          <TableFooter disabled>
            <TableRow disabled>
              <TableCell disabled>Footer</TableCell>
              <TableCell disabled>Total</TableCell>
              <TableCell disabled>2 Items</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Section>
    </Page>
  );
}

export default App;

