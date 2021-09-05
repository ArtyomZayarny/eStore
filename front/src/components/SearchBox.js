import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function SearchBox({ history }) {
  const [keyword, setKeyword] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <Form onSubmit={submitHandler} className="d-inline-flex flex-nowrap">
      <Form.Control
        inline
        type="text"
        name="q"
        onChange={e => setKeyword(e.target.value)}
        placeholder="Seearch Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2" inline>
        Search
      </Button>
    </Form>
  );
}
