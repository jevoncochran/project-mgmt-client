import { Client } from "../types/types";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

interface ClientRowProps {
  client: Client;
}

const ClientRow = ({ client }: ClientRowProps) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [GET_CLIENTS, "getClients"],
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteClient({ variables: { id: client.id } })}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
