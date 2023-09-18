import { FormEventHandler, useState } from "react";
import { Alert, Button, Form, ProgressBar } from "react-bootstrap";

interface ILogin {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  errorMessage: string;
  loading: boolean;
  countProgress: number;
}

export default function AdminLogin({ handleSubmit, errorMessage, loading, countProgress }: ILogin) {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" name="password" />
        </Form.Group>

        {errorMessage && (
          <Form.Group controlId="formBasicPassword">
            <Alert variant="danger">{errorMessage}</Alert>
          </Form.Group>
        )}

        {loading && <ProgressBar now={countProgress} variant={"success"} className={"mb-3"} />}

        {loading ? (
          <Button variant="primary" type="button" disabled={true} className="w-100">
            Entrar
          </Button>
        ) : (
          <Button variant="primary" type="submit" className="w-100">
            Entrar
          </Button>
        )}
      </Form>
    </>
  );
}
