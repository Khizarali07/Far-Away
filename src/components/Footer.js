function Footer({ items }) {
  const itemnum = items.length;
  const itempacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((itempacked / itemnum) * 100);

  return (
    <>
      <div className="stats">
        {itemnum === 0
          ? "Add some items to start"
          : percentage === 100
          ? "You are ready to go now"
          : `You have ${itemnum} items on your list and you already packed
        ${itempacked} (${percentage}%)`}
      </div>
    </>
  );
}

export default Footer;
