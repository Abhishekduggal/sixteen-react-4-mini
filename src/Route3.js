import React from "react";

export default function Route3(props) {
  console.log("props: ", props);
  return (
    <div>
      title:{props.products.find(c => c.id == props.match.params.id).title}
    </div>
  );
}
