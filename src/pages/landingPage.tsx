function LandingPage() {
    return (
        <div className="px-4 sm:px-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-5">
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Expensio
                </h1>

                <button
                    type="button"
                    onClick={() => {}}
                    className="text-purple-600 border-b-purple-950 border px-4 py-2 rounded-3xl 
                    hover:bg-gradient-to-r from-purple-600 to-indigo-600 
                    hover:border-blue-600 hover:text-white shadow-md transition-all duration-300"
                >
                    Login to Expensio
                </button>
            </div>

            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-6">
                <div className="flex flex-col justify-center items-center text-center lg:text-left">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        Track Control of your money
                    </h1>
                    <h3 className="text-base sm:text-lg mt-2 text-gray-500">
                        Track, Budget and save with ease
                    </h3>
                    <p className="text-center text-sm sm:text-base mt-2 text-gray-500">
                        Take charge of your financial journey. Plan smarter, save more, and build the future you deserve with effortless money management.
                    </p>

                    <button
                        type="button"
                        onClick={() => {}}
                        className="text-purple-600 border-b-purple-950 border mt-4 px-4 py-2 rounded-3xl 
                        hover:bg-gradient-to-r from-purple-600 to-indigo-600 
                        hover:border-blue-600 hover:text-white shadow-md transition-all duration-300"
                    >
                        Get Started
                    </button>
                </div>
                <div className="flex justify-center items-center mt-3">
                    <img
                        className="w-40 sm:w-60 lg:w-150"
                        src="./src/assets/images/expenceImage.jpg"
                        alt="side image"
                    />
                </div>
            </div>

            {/* Card section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {[
                    {
                        img: "./src/assets/images/saveMoney.png",
                        title: "Smart Budgeting",
                        desc: "Set Spending limits and get alerts to track your spending habits."
                    },
                    {
                        img: "./src/assets/images/card.png",
                        title: "Expense Tracker",
                        desc: "Categorize your expenses, manage your budget, and stay on top of your finances."
                    },
                    {
                        img: "./src/assets/images/chart.png",
                        title: "Expense Visualization",
                        desc: "Visualize your expenses, manage your budget, and stay on top of your finances."
                    }
                ].map((card, idx) => (
                    <div key={idx} className="p-6">
                        <div className="bg-indigo-50 border-indigo-900 rounded-2xl shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105">
                            <img src={card.img} alt="Expense" className="mx-auto mb-4 w-16 sm:w-20" />
                            <h2 className="text-lg sm:text-xl font-bold text-center">{card.title}</h2>
                            <p className="text-gray-600 mt-2 text-center">{card.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* How it works */}
            <div className="mt-10">
                <h1 className="text-center text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    How it works
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-10 lg:p-20">
                    <div className="bg-indigo-100 border border-indigo-600/20 rounded-2xl shadow-2xl p-6 flex flex-col justify-center items-center">
                        <div className="w-10 h-10 flex justify-center items-center rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600">
                            💰
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold mt-4 text-center">Add Your Expenses</h2>
                        <p className="text-gray-600 mt-2 text-center">
                            Quickly input your daily expenses with our smart categorization system. Snap receipts or manually enter transactions.
                        </p>
                    </div>
                    <div className="bg-indigo-100 border border-indigo-600/20 rounded-2xl shadow-2xl p-6 flex flex-col justify-center items-center">
                        <div className="w-10 h-10 flex justify-center items-center rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600">
                            🎯
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold mt-4 text-center">Set Budget Limits</h2>
                        <p className="text-gray-600 mt-2 text-center">
                            Create custom categories and set spending limits that align with your financial goals. Get personalized recommendations.
                        </p>
                    </div>
                    <div className="bg-indigo-100 border border-indigo-600/20 rounded-2xl shadow-2xl p-6 flex flex-col justify-center items-center">
                        <div className="w-10 h-10 flex justify-center items-center rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600">
                            📊
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold mt-4 text-center">Track Progress</h2>
                        <p className="text-gray-600 mt-2 text-center">
                            Monitor your spending with beautiful charts and insights. Receive alerts when you're approaching your limits.
                        </p>
                    </div>
                    <div className="bg-indigo-100 border border-indigo-600/20 rounded-2xl shadow-2xl p-6 flex flex-col justify-center items-center">
                        <div className="w-10 h-10 flex justify-center items-center rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600">
                            🏆
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold mt-4 text-center">Achieve Goals</h2>
                        <p className="text-gray-600 mt-2 text-center">
                            Celebrate your financial wins and build lasting money habits with our achievement system and progress tracking.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
