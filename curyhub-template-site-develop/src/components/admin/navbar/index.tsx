import { useRouter } from "next/router";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

export default function AdminNavbar() {
  const router = useRouter();
  const expand = false;

  function logout() {
    sessionStorage.setItem("admin-login", JSON.stringify(false));
    router.push("/admin");
  }

  function checkRoute(url: string) {
    if (router.pathname === url) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Navbar bg="light" expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Customization</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="border-primary" />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Customization</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                onClick={() => router.push("/admin/customization")}
                className={`${checkRoute("/admin/customization") ? "text-primary" : ""}`}
              >
                Informações do tema
              </Nav.Link>
              <Nav.Link
                onClick={() => router.push("/admin/customization/mudar-tema")}
                className={`${checkRoute("/admin/customization/mudar-tema") ? "text-primary" : ""}`}
              >
                Mudar tema
              </Nav.Link>
              <Nav.Link
                onClick={() => router.push("/admin/customization/palleta-de-cores")}
                className={`${checkRoute("/admin/customization/palleta-de-cores") ? "text-primary" : ""}`}
              >
                Mudar palleta de cores
              </Nav.Link>
              <Nav.Link
                onClick={() => router.push("/admin/customization/paginas")}
                className={`${checkRoute("/admin/customization/paginas") ? "text-primary" : ""}`}
              >
                Paginas
              </Nav.Link>
              <Nav.Link
                onClick={() => router.push("/admin/customization/configurar-dominio")}
                className={`${checkRoute("/admin/customization/configurar-dominio") ? "text-primary" : ""}`}
              >
                Configurar dominio
              </Nav.Link>
              <Nav.Link
                onClick={() => router.push("/admin/customization/configurar-dns")}
                className={`${checkRoute("/admin/customization/configurar-dns") ? "text-primary" : ""}`}
              >
                Configurar dns
              </Nav.Link>
            </Nav>

            <Button variant="primary" onClick={logout}>
              Sair
            </Button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
