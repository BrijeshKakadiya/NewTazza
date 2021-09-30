import styles from "./Checkout.module.css";
import Hero from "../../components/Hero/Hero";
import CardTotal from "../../components/CardTotal/CardTotal";
import Creditcard from "../../assets/CreditCard.svg";
import PayPal from "../../assets/PayPal.svg";
import Forminput from "../../components/FormInput/Forminput";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  Name: Yup.string()
    .min(4, "Too short")
    .max(30, "Too Long!")
    .required("Firstname is required"),

  NickName: Yup.string()
    .min(4, "Too short")
    .max(30, "Too Long!")
    .required("NickName is required"),

  Email: Yup.string()
    .min(4, "Too short")
    .max(30, "Too Long!")
    .required("Pleas Enter a Valid Email")
    .email(),

  PhoneNumber: Yup.string()
    .min(10, "Too short")
    // .max(10, "Too Long!")
    .required("Pleas Enter a valid PhoneNumber")
    .matches(
      /^([0]{1}|\+?[261]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
      "Invalid phone number"
    ),

  checkout_country: Yup.string()
    .min(4, "Too short")
    .max(20, "Too Long!")
    .required("Country is required"),

  checkout_state: Yup.string()
    .min(4, "Too short")
    .max(20, "Too Long!")
    .required("State is required"),

  checkout_address: Yup.string()
    .min(4, "Too short")
    .max(200, "Too Long!")
    .required("Address is required"),

  checkout_postalcode: Yup.string()
    .min(4, "Too short")
    .max(20, "Too Long!")
    .required("Postal is required"),

  checkout_billing_textarea: Yup.string()
    .min(4, "Too short")
    .max(2000, "Too Long!")
    .required("Note is required"),
});

const Checkout = () => {
  const {
    // register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Hero>Chackout</Hero>
      <div className={styles.order_part}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="order_content">
                <div className={styles.order_txt}>
                  <h2>Your Order</h2>
                  <p>
                    We all know how hard it can be make sure ead lookis like
                    demo tom make your start intoe the world of easy ase
                    possible have encluded the demom.
                  </p>
                </div>
                <div className="pt-2">
                  <CardTotal />
                </div>
                <div className={`pt-4 ${styles.payment_method}`}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className={`text-uppercase ${styles.payment_head} text-center`}
                          colSpan="2"
                        >
                          Payment method
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="w-50">
                          <div className={styles["form-check"]}>
                            <input
                              className={styles["form-check-input"]}
                              type="radio"
                              name="payment"
                              id="credit_card"
                              checked
                            />
                            <label
                              className={styles["form-check-label"]}
                              for="credit_card"
                            >
                              Credit Card
                            </label>
                          </div>
                        </th>
                        <td className="w-50">
                          <img
                            src={Creditcard}
                            alt="img"
                            className="credit_card float-right"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th className="w-50">
                          <div className={styles["form-check"]}>
                            <input
                              className={styles["form-check-input"]}
                              type="radio"
                              name="payment"
                              id="paypal"
                            />
                            <label
                              className={styles["form-check-label"]}
                              for="paypal"
                            >
                              Paypal
                            </label>
                          </div>
                        </th>
                        <td className="w-50">
                          <img
                            src={PayPal}
                            alt="img"
                            className="paypal float-right"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
              <div className="billing_content">
                <div className={`text-uppercase ${styles.billing_head} `}>
                  <h2>billing details</h2>
                  <div className="billing_form">
                    <form action="#" onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          {/* <Forminput
                            type="text"
                            id="checkout_name"
                            name="checkout_name"
                            placeholder="Name*"
                            {...register("checkout_name")}
                          /> */}
                          <Controller
                            render={({ field }) => (
                              <Forminput {...field} placeholder="Name*" />
                            )}
                            name="Name"
                            control={control}
                            className={`border-radius-0 ${styles["custom-control"]} form-control`}
                          />
                          {errors.Name && (
                            <span role="alert">{errors.Name.message}</span>
                          )}
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <Controller
                            render={({ field }) => (
                              <Forminput {...field} placeholder="Nick Name*" />
                            )}
                            name="NickName"
                            control={control}
                            className={`border-radius-0 ${styles["custom-control"]} form-control`}
                          />
                          {errors.NickName && (
                            <span role="alert">{errors.NickName.message}</span>
                          )}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <Controller
                            render={({ field }) => (
                              <Forminput {...field} placeholder="Email*" />
                            )}
                            name="Email"
                            control={control}
                            className={`border-radius-0 ${styles["custom-control"]} form-control`}
                          />
                          {errors.Email && (
                            <span role="alert">{errors.Email.message}</span>
                          )}
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <Controller
                            render={({ field }) => (
                              <Forminput
                                {...field}
                                placeholder="Phone Number*"
                              />
                            )}
                            name="PhoneNumber"
                            control={control}
                            className={`border-radius-0 ${styles["custom-control"]} form-control`}
                          />
                          {errors.PhoneNumber && (
                            <span role="alert">
                              {errors.PhoneNumber.message}
                            </span>
                          )}
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          {/* <Forminput
                            type="text"
                            id="checkout_country"
                            name="checkout_country"
                            placeholder="Country"
                            {...register("checkout_country")}
                          /> */}
                          <Controller
                            render={({ field }) => (
                              <Forminput {...field} placeholder="Country*" />
                            )}
                            name="checkout_country"
                            control={control}
                            className={`border-radius-0 ${styles["custom-control"]} form-control`}
                          />
                          {errors.checkout_country && (
                            <span role="alert">
                              {errors.checkout_country.message}
                            </span>
                          )}
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          {/* <Forminput
                            type="email"
                            id="checkout_state"
                            placeholder="State/Disctrict"
                            {...register("checkout_state")}
                            placeholder="email"
                            required
                            // name="checkout_state"
                          /> */}
                          <Controller
                            render={({ field }) => (
                              <Forminput {...field} placeholder="State*" />
                            )}
                            name="checkout_state"
                            control={control}
                            className={`border-radius-0 ${styles["custom-control"]} form-control`}
                          />
                          {errors.checkout_state && (
                            <span role="alert">
                              {errors.checkout_state.message}
                            </span>
                          )}
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          {/* <Forminput
                            type="text"
                            id="checkout_address"
                            name="checkout_address"
                            placeholder="Address:"
                            {...register("checkout_address")}
                          /> */}
                          <Controller
                            render={({ field }) => (
                              <Forminput {...field} placeholder="Address*" />
                            )}
                            name="checkout_address"
                            control={control}
                            className={`border-radius-0 ${styles["custom-control"]} form-control`}
                          />
                          {errors.checkout_address && (
                            <span role="alert">
                              {errors.checkout_address.message}
                            </span>
                          )}
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          {/* <Forminput
                            type="text"
                            id="checkout_postalcode"
                            name="checkout_postalcode"
                            placeholder="Zip/Postal Code"
                            {...register("checkout_postalcode")}
                          /> */}
                          <Controller
                            render={({ field }) => (
                              <Forminput {...field} placeholder="PostalCode*" />
                            )}
                            name="checkout_postalcode"
                            control={control}
                            className={`border-radius-0 ${styles["custom-control"]} form-control`}
                          />
                          {errors.checkout_postalcode && (
                            <span role="alert">
                              {errors.checkout_postalcode.message}
                            </span>
                          )}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3">
                          {/* <TextArea
                            id="checkout_billing_textarea"
                            name="checkout_billing_textarea"
                            rows="10"
                            placeholder="Note Of Order :"
                          ></TextArea> */}
                          <Controller
                            render={({ field }) => (
                              <TextArea
                                {...field}
                                placeholder="Note Of Order :"
                                rows="10"
                              />
                            )}
                            name="checkout_billing_textarea"
                            control={control}
                            className={`border-radius-0 ${styles["custom-control"]} form-control`}
                          />
                          {errors.checkout_billing_textarea && (
                            <span role="alert">
                              {errors.checkout_billing_textarea.message}
                            </span>
                          )}
                          {/* {errors.checkout_billing_textarea &&
                            errors.checkout_billing_textarea.type ===
                              "required" && (
                              <span role="alert">This is required</span>
                            )}
                          {errors.checkout_billing_textarea &&
                            errors.checkout_billing_textarea.type ===
                              "maxLength" && (
                              <span role="alert">Max length exceeded</span>
                            )}
                          {errors.checkout_billing_textarea &&
                            errors.checkout_billing_textarea.type ===
                              "minLength" && (
                              <span role="alert">Min length exceeded</span>
                            )} */}
                        </div>
                      </div>
                      <div className="text-end mt-3">
                        <Button
                          square
                          // onClick={handleSubmit(onSubmit)}
                          type="submit"
                        >
                          Submit
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
