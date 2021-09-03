import React, { useEffect } from "react";
import { Table, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Message from "../components/message";
import { getListOrders } from "../actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/loader";
import { ORDER_LIST_RESET } from "../constants/orderConstans";

export default function OrderListScreen({ history }) {
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const orderList = useSelector(state => state.orderList);
  const {
    loading: loadingListOrder,
    error: errorListOrder,
    ordersList
  } = orderList;

  useEffect(() => {
    dispatch({ type: ORDER_LIST_RESET });
    if (!userInfo) {
      history.push("/login");
    } else {
      dispatch(getListOrders());
    }
  }, [history, userInfo, dispatch]);
  console.log("ordersList", ordersList);
  return (
    <Col>
      <h2>My orders</h2>
      {loadingListOrder ? (
        <Loader />
      ) : errorListOrder ? (
        <Message variant="danger">{errorListOrder}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ordersList.map(order => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  {
                    <LinkContainer to={`/admin/order/${order._id}`}>
                      <Button className="btn-sm" variant="light">
                        Details
                      </Button>
                    </LinkContainer>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Col>
  );
}
