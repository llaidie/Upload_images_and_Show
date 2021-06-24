import { Formik, Field } from "formik";
import { useRef, useState } from "react";
import _ from "lodash";
import Images from "render";
export default function App() {
  const fileRef = useRef();
  const [images, setImages] = useState([]);
  const handleOnSubmit = (values, actions) => {
    console.log("Form submitted!", values);
    console.log(actions);
    var tmp = console.log(tmp);
    //actions.setFieldValue("files", "");
    var tmp = _.map(values.files, (v, i) => {
      console.log(v);
      console.log(window.URL.createObjectURL(v));
      return window.URL.createObjectURL(v);
    });
    console.log(tmp);
    setImages(tmp);
  };
  console.log(images);
  return (
    <div className="App">
      <Formik initialValues={{ files: "" }} onSubmit={handleOnSubmit}>
        {({ values, setFieldValue, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              innerRef={fileRef}
              id="files"
              name="files"
              type="file"
              multiple={true}
              // value={values.files}
              value={values.files ? undefined : ""}
              // value={undefined}
              // value=""
              onChange={(event) => {
                console.log(
                  "File input change!",
                  event.target.files,
                  Array.from(event.target.files)
                );
                setFieldValue("files", Array.from(event.target.files));
              }}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
      {/* Clear all */}
      <button
        onClick={() => {
          fileRef.current.value = null;
          setImages([]);
        }}
      >
        Clear
      </button>
      {/* Affichage des Images */}
      {_.map(images, (im, i) => {
        return <img src={im} alt="" key={i} />;
      })}
    </div>
  );
}
