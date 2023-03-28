import React, { useEffect } from 'react'

interface test {
    hidden?: boolean
}

function NewTask({ hidden }: test) {
    return (
        <>
            {!hidden && (
                <div className="flex justify-center items-center">
                    <div className="bg-white rounded-md shadow-lg h-1/3 w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="p-4">
                            <h1 className="text-xl font-bold mb-2">My Card Title</h1>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </>

    )
}

export default NewTask