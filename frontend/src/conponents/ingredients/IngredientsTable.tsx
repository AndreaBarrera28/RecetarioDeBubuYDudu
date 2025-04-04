import { Table } from "react-bootstrap";
import useIngredients from "../../hooks/useIngredients";

const IngredientsTable = () => {
    const { data: ingredients = [], error } = useIngredients();
    if (error) return <div>Error al cargar los ingredientes</div>;
    return(
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient: { id: number, name: string }) => (
            <tr key={ingredient.id}>
              <td>{ingredient.id}</td>
              <td>{ingredient.name}</td>
            </tr>
          ))}
        </tbody>
    </Table>

    )
};
export default IngredientsTable;
