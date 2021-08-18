import { Container } from "./styles";

export function TransactionsTable(){
    return (
        <Container>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>Desenvolvimento de website</td>
                <td>12.000</td>
                <td>Desenvolvimento</td>
                <td>20/02/2021</td>
            </tr>
            <tr>
                <td>Desenvolvimento de website</td>
                <td>12.000</td>
                <td>Desenvolvimento</td>
                <td>20/02/2021</td>
            </tr>
            <tr>
                <td>Desenvolvimento de website</td>
                <td>12.000</td>
                <td>Desenvolvimento</td>
                <td>20/02/2021</td>
            </tr>
            <tr>
                <td>Desenvolvimento de website</td>
                <td>12.000</td>
                <td>Desenvolvimento</td>
                <td>20/02/2021</td>
            </tr>


            </tbody>
        </Container>
        

    );
}