import { Breadcrumb, Button, Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import IngredientsTable from "../../conponents/ingredients/IngredientsTable";

const IngredientIndex = () =>{
    return(
    <>
    <Breadcrumb>
    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Ingredientes</Breadcrumb.Item>
    </Breadcrumb>
    <Card>
                <Card.Header className="bg-gray-700">
                    <Stack direction="horizontal" gap={1}>
                        <Card.Title>Ingredientes</Card.Title>
                        <Button
                            variant="primary"
                            className="btn-sm me-2 ms-auto"
                        >
                            Nuevo Ingrediente
                        </Button>
                    </Stack>
                </Card.Header>
                <Card.Body>
                    <div className="table-responsive">
                        <IngredientsTable />
                    </div>
                </Card.Body>
            </Card>

    </>

    );
};

export default IngredientIndex;
