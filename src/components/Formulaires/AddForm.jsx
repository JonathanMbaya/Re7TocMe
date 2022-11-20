import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";

const validationSchema = Yup.object().shape({
  recettteName: Yup.string()
    .min(5, "trop petit")
    .max(50, "trop long!")
    .required("Ce champ est obligatoire"),
  recetteDescription: Yup.string()
    .min(2, "trop petit")
    .max(50, "trop long!")
    .required("Ce champ est obligatoire"),
  nbrPersonnes: Yup.string()
    .required("l'email est obligatoire"),
  tempsPreparation: Yup.string()
    .required("Mot de passe est obligatoire")
    .min(2, "Mot de passe doit être plus grand que 8 caractères")
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

const initialValues = {
  recettteName: "",
  recetteDescription: "",
  nbrPersonnes: "",
  tempsPreparation: "",
  acceptTerms: false
};

const handleSubmit = (values) => {
  console.log(values);
};

const AddForm = () => {
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
                    name="recetteName"
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
                    name="recetteDescription"
                    component="small"
                    className="text-danger"
                  />
                </div>


                <div className="form-group mb-3">
                  <label htmlFor="nbrPersonnes">Nombre de Personnes</label>
                  <Field
                    type="text"
                    id="nbrPersonnes"
                    name="nbrPersonnes"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="nbrPersonnes"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="tempsPreparation">
                    Temps de préparation (min)
                  </label>
                  <Field
                    type="text"
                    id="tempsPreparation"
                    name="tempsPreparation"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="tempsPreparation"
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
                <div className="form-group btns">
                  <button type="submit" className="btn btn-btn-edit btn-primary">
                    Ajouter la recette
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn btn-btn-delete btn-danger"
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

export default AddForm;
