import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";


// Schema de validation avec Yup

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(5, "trop petit")
    .max(50, "trop long!")
    .required("Ce champ est obligatoire"),
  lastName: Yup.string()
    .min(2, "trop petit")
    .max(10, "trop long!")
    .required("Ce champ est obligatoire"),
  email: Yup.string()
    .email("email invalide")
    .required("l'email est obligatoire"),
  password: Yup.string()
    .required("Mot de passe est obligatoire")
    .min(8, "Mot de passe doit être plus grand que 8 caractères")
    .max(50, "Mot de passe doit être plus petit que 50 caractères"),
  confirmPassword: Yup.string()
    .required("Confirmation de mot de passe est obligatoire")
    .oneOf(
      [Yup.ref("password"), null],
      "Le mot de passe de confirmation ne correspond pas"
    ),
  acceptTerms: Yup.bool().oneOf(
    [true],
    "Accepter les conditions est obligatoire"
  )
});

// const pour initialiser la valeur de chaque champ

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false
};

// const pour récupérer les values de chaque champs dans la console

const handleSubmit = (values) => {
  console.log(values);
};

const EditForm = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 pt-3">
          <h1 className="text-center">Inscription</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ resetForm }) => (

              // Formulaire Formik 


              <Form>

                <div className="form-group mb-3">
                  <label htmlFor="recetteName">Titre de la Recette</label>

                  <Field
                    type="text"
                    id="recettteName"
                    name="recetteName"
                    className="form-control"
                  />

                  <ErrorMessage
                    name="firstName"
                    component="small"
                    className="text-danger"
                  />

                </div>



                <div className="form-group mb-3">

                  <label htmlFor="recetteDescription">Description de la recette (brief)</label>

                  <Field
                    type="text"
                    id="recetteDescription"
                    name="recetteDescription"
                    className="form-control"
                  />

                  <ErrorMessage
                    name="lastName"
                    component="small"
                    className="text-danger"
                  />

                </div>




                <div className="form-group mb-3">

                  <label htmlFor="levelRecette">Niveau de difficulté</label>

                  <Field
                    type="text"
                    id="levelRecette"
                    name="levelRecette"
                    className="form-control"
                  />

                  <ErrorMessage
                    name="email"
                    component="small"
                    className="text-danger"
                  />

                </div>

                <div className="form-group mb-3">

                  <label htmlFor="password">Nombre de Personnes</label>

                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                  />

                  <ErrorMessage
                    name="password"
                    component="small"
                    className="text-danger"
                  />

                </div>

                
                <div className="form-group mb-3">
                  <label htmlFor="confirmPassword">
                    Temps de préparation (min)
                  </label>
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group form-check mb-5">
                  <Field
                    name="acceptTerms"
                    type="checkbox"
                    className="form-check-input"
                  />
                  <label htmlFor="acceptTerms" className="form-check-label">
                    J'ai lu et j'accepte les conditions
                  </label>
                  <ErrorMessage
                    name="acceptTerms"
                    component="small"
                    className="text-danger d-block"
                  />
                </div>
                <div className="form-group d-flex justify-content-end gap-3">
                  <button type="submit" className="btn btn-primary">
                    S'inscrire
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn btn-danger"
                  >
                    Annuler
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
