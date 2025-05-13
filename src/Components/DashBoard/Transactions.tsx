import { FiPlusCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useTable, Column } from "react-table";
import RootState from "../../Function/Rootstate";
import { setUserTransactions } from "../../Function/Slice";

interface Transaction {
  mode: string;
  amount: number;
  status: string;
  createdAt: string;
}

const Transactions: React.FC = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state: RootState) => state.mySlice.token);
  const userTrans = useSelector(
    (state: RootState) => state.mySlice.userTransactions || []
  );

  const getHistory = async () => {
    const url = "https://exp-pro.onrender.com/api/user/history";
    const headers = {
      Authorization: `Bearer ${userToken}`,
    };
    try {
      const response = await axios.get(url, { headers });
      dispatch(setUserTransactions(response.data.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHistory();
  }, [dispatch, userToken]);

  // Define columns for react-table with TypeScript
  const columns: Column<Transaction>[] = useMemo(
    () => [
      {
        Header: "Mode",
        accessor: "mode",
      },
      {
        Header: "Amount",
        accessor: "amount",
        Cell: ({ value }) => `$${value}`, // Format amount with a dollar sign
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <span
            className={
              value === "approved"
                ? "text-green-400"
                : value === "pending"
                ? "text-yellow-400"
                : value === "failed"
                ? "text-red-400"
                : ""
            }
          >
            {value}
          </span>
        ),
      },
      {
        Header: "Date",
        accessor: "createdAt",
        Cell: ({ value }) => new Date(value).toLocaleDateString(), // Format date
      },
    ],
    []
  );

  // Use react-table to create the table instance
  const tableInstance = useTable<Transaction>({ columns, data: userTrans });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="w-[95%] h-[100%] flex flex-col justify-center overflow-hidden">
      <div className="w-[100%] h-[100%] flex flex-col phone:px-4 py-8 gap-3">
        <div className="w-[100%] h-[80%] border border-[#023e8a] rounded overflow-y-auto">
          {userTrans.length > 0 ? (
            <table
              {...getTableProps()}
              className="min-w-full bg-gray-500  border border-[#023e8a] rounded"
            >
              <thead>
                {headerGroups.map((headerGroup: any) => (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    key={headerGroup.id}
                  >
                    {headerGroup.headers.map((column: any) => (
                      <th
                        {...column.getHeaderProps()}
                        className="px-4 py-2 text-xs text-[rgb(128,148,174)] font-medium"
                        key={column.id}
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      key={row.id}
                      className="hover:bg-gray-800"
                    >
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className=" px-12 py-2 text-lg text-white  font-medium"
                          key={cell.column.id}
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <p className="text-[#023e8a]">
                You have not made any transactions
              </p>
              <NavLink to={"/user/deposit"}>
                <button className="bg-[#023e8a] rounded text-white px-6 py-2 text-sm font-semibold flex items-center gap-2">
                  <FiPlusCircle />
                  Deposit Now
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
