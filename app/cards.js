import data from "./data"
function Cards(props) {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        {data.map((card, index) => (
          <div key={index} className="card bg-white rounded-lg shadow-md w-80 h-70 mt-4">
            <Image
              src={card.imageUrl}
              className="w-full h-60 object-cover rounded-t-lg sm:mx-auto sm:h-64"
              alt={card.title}
            />
            <div className="p-4">
              <h5 className="text-gray-900 font-bold text-2xl">{card.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}