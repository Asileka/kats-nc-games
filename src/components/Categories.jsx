import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { getCategories } from "../functions/api";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getCategories().then((res) => {
      setCategories(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="Categories">
          <dl>
            {categories.map((category) => {
              return (
                <div className="grid-categories" key={category.category_id}>
                  <Link className="Link" to={`/games/${category.slug}`}>
                    <b>{category.slug}</b>
                  </Link>
                  <dd>{category.description}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      )}
    </div>
  );
};

export default Categories;
