import React, { useState, useEffect } from "react";

function App() {
  const [subject, setSubject] = useState([]);
  const [day, setDay] = useState("");
  const [data, setData] = useState("");

  const GET_URL = "http://localhost/soloway/api/get-data.php";
  const POST_URL = "http://localhost/soloway/api/post-data.php";

  const postData = async () => {
    const formData = new FormData();
    console.log(subject, day);
    formData.append("subject", subject);
    formData.append("day", day);

    try {
      const response = await fetch(POST_URL, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();
      console.log(result);
      setSubject("");
      setDay("");
      await getData();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getData = async () => {
    const response = await fetch(GET_URL);
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-gradient-to-tr from-sky-200 from-10% via-sky-100 via-70% to-emerald-100 to-90% h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl text-slate-500 font-bold">
          Schedule list
        </h1>
        <div className="flex gap-x-10 mt-10">
          <div className="w-1/4">
            {" "}
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                postData();
              }}
            >
              <input
                type="text"
                placeholder="Enter subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="px-5 py-3 rounded-md focus:ring-2 focus:outline-none focus:ring-slave-500 focus:border-slave-500 shadow"
                required
              />
              <div className="relative flex">
                <select
                  name="day"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="px-5 py-3 rounded-md appearance-none w-full focus:outline-none focus:ring-2 focus:ring-slave-500 focus:border-slave-500 shadow cursor-pointer"
                >
                  <option value="" disabled>
                    Оберіть день тижня:
                  </option>
                  <option value="monday">Понеділок</option>
                  <option value="tuesday">Вівторок</option>
                  <option value="wednesday">Середа</option>
                  <option value="thursday">Четвер</option>
                  <option value="friday">П'ятниця</option>
                  <option value="saturday">Субота</option>
                  <option value="sunday">Неділя</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
              <button
                type="submit"
                className="px-5 py-3 rounded-md bg-slate-50 shadow hover:bg-slate-100 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="w-3/4">
            <h2>Users:</h2>
            <ul>
              {/* {data.map((user, index) => (
                <li key={index}>
                  {user.name} ({user.email})
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
