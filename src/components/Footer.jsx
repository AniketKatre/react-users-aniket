// import 
import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
    let cur_year = new Date().getFullYear()

    return (
        <>

            <footer>
                <Container>
                    <Row>
                        <Col className="text-center py-3">
                            <p>📧 katreaniket3@gmail.com  - &copy; - React-app - {cur_year}</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>

    )
}

export default Footer
