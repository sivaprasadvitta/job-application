import React from 'react';
import { getTimeAgo } from '../utils/timeAgo';

export default function JobCard({ job }) {
    // console.log(job.createdAt);



    return (
        <div className="bg-white rounded-lg shadow-card p-6 relative flex flex-col">
            <div className='flex flex-col'>
                <img
                    src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAPFBMVEWMscr///+Hrsjb5+75+/yVt860y9ygvtPx9fiwyNucu9HN3Oewydro7/TJ2eWRtMy+0uDU4eunw9aAqcVfrweLAAAJRUlEQVR4nM2c16KjIBBACaBgAYH8/78uYEOlDInm7rxsidETpgKD6PUfCvprgJh8DUUF0VKNXWeY6cZWSU3430FRLrRi6I1XQdvf3pNRRHzO9iEUJ3LsLQVKiCWbWCsJ/RkU1V0zpYF2MjT1LfkFFNctBgDtQ9ao6vGqhBKKVRCtA2ZknX1VQQkz1RItWE0rHoGipH6QAi48wrUIhtIGfY7ksaYOOlpAKPEtksdCLcy2QFC8vQFpxhogOoRAaXYPkhcDCFxlKG5uRHIWr4qDVYTSza1MDsuUDL4E1d5M5Kma4Rsocac1hVhj1g2zUPerbqNiORXmoIbpISRH1WSo0lBUPTVMC5auh6Lts0wITUlzT0E9z2RF1kHReyNmQt4JqjjUT8bJSZwqCvUzJoSidhWF+h0Tesfycwxq+B0TQk2EKgKlH4yZMaprxrlCieanTDbjXEqZCxR9KAdnqFQR6hYjr7zH2QXPUPoGJMRUXXlxTs4nKP69QdkSjr/EWEOFTRbq2+yCEVt0Qfqar8kMlP6WiQ2bg3NZMcc/KvAAxWt+XQRpGg4xh8AdGXdJqO88j21ORFc2DTbRt05AiS+IrOK2GCgUW9d+uILeoKFxqM/Dpve4FaltrL33a0ojPeyuoa0HUJ+HqH2UqBiXyLlPOSUMK7D1HYp2nw1U6HGk3T0OT2r5fwsKuY+KQJHPkJrdlshpoQ/3q0pAOpz4Feoji9oVx2MLfZgty3cUkHhwe4Ei9Uy43xU3xFfV8LSuk4lystgqqw2qPsH0u3kPfbIwwI1cBmsoDpY8QYnacjNQ3BBaDG78nQLrwr2eL+Uq/xDM+BGqbo4eKI7LMDdhpIT3Yi3DcVmXYGXhvuQAxVkFEerlNkqhAS8fuGTVc5eQ90+W8FAIhWsJs0DVlAe74sTBp7CZWRcoN4i7R+PG6bAUnzEPocCpOFDcAQlby+H7vXq+WtF+yShepGC5y0rMDEWB+QmxTXFbPvEfTN0+fQug7J3lXijgzpQewAIooPb2hBLmE6uawwbaAcp7wnpp+SmT2KEgaQ+jHWkMkXArDjO3E9RJiQUZNijIdGEr4ahNZMEzmsuy+AXqqMT8Lx/pClWyP5dal6dQbXAYF+V16TIC5ZQIm3X5L3oomb8+UFy4l4XxFN1cjEJBJxJYLFA0O0nbC11us1dQLpnESmoCCqZEX4A6qMIkZi23g1DotmCTe4oOKrEgXVAJWoK6g8pPGPr5V6qAPLfNKeas26gY1lBisrJA5aNUPz/pEJYSC/NUyP69XIjfjRRncgDUm89Q+QqhP+WTJJIYxlM5PJlB1EJhMkMVKoQuDBhNYjefDma6RmyMrDvQOig1Q5Uu2/+yp76DcNImW0zs/7dbSw4Eyngo+i5f6u/OdNTRiWL5rGZ/jCJQKMQ8lICEWhzf/KXW3iDrdtjpnYKgbIhDoHnMoTQJiIZk/8S1H8aOtIQkfhviEKBusXVAJCzxoWvSLR2jtDPT88fQ6TsqzhmiMYCTMfYMPDWLKwsftbom4pIFmUgZqr+GZk5UZIxcG5cifJmrkfVSaXLNXzHRDiqXjnF3cTih2DXd28faQOmuXfYGdhOk3LsnHMxD5azvtEJqNXIdI4wbtjduXaDmLxJlQG6KXPGJ8hP2w26AiCwYWKLxkOPiUP4T11dYFuyhclfuUFSP55/q2hRbzY+OmYZ6AUpc5JUDg+KkOxuFnQ6f0+0voayh9hcia0WXwuROqKxNtbZEOhUkNjSrONA9UEMpJJxc2beU6iTQDoU/h5q9D7qOYIk6WWwMXqCM1JHRBEFpQJpZgNDUnR0tIjb9zM+11zd9p06/AQI1eajiFMPGIpOxolmoIEPbnLXtIn2rxfplyFbwnPvyVYKdALQxTRyBtEqmOAfWd60kAgY1VwnZemoqDBFda4FCqWHVOTVdV2ZaoHjufizDMzekV6Ra0JU99ROHXI1uEkSuIZ1B+r+rZa7RXzmXuEJZhenWTZdj9Yv1Oebtxv7h167re7LHGSoX0o9Q1sXk2MfqbzszYF07aFtTua4Umyu41a6WqjWOEq5jVyyVZsgmAJKtq4nOlQL2EUMTsUaxBWpTNBc2WijFQN3+2ww5535mUZjqTx7m/tE0plP6fMJCHqFCzwBs32K6rLpkjKonRLbswOPHho1quOAUoEA7581rWZ/KFS/hoPsIPTld8UzGUd9AOTuflxeLKdmdOGl65nRVbt3+DkqvULl9HMczZ4lyOr4BCq1rntnkPQ5OVzWHTNoMVHHmwLbVYZr+AX39GSEPdemJgkHN30Pbfe6Fio8ULY6U3qHSkaq5daSKUPM28rK1ljSqSBtf9GmrcM79jLsfnEgnapdS6bL04ZT2+0Io+0ixCCFE6/mZ7qltO3rpjGFsqYejUoIK9/synRKsM6x30vSNlWmT8F7gp5aEhlCZBuYnaqbUoxZLXHfbY/EzroGvJQ01iSNUZMuvGVtrOIHI1XTl2YCVM6tFZutqR/+P7iz286QHzpt9AdTV1PfWk5sl3Zq8bottUJeF68egkvPMLSbuXUGXJQVDnpHU2gXeevqC/qlLAH3I0IsDdUOn2V0SpMugJ++b5sUbxPAY1C9PEUQk2JEOofgfIuH+FYf67eGGE5RIQd186LGG6VB/HbusP+gWvEeOfQynfvSHT6ol5bhue4L6zRmss5wz2vmMw68PqHgmxvNQf+GBlx6U62GeqiMTd8j1SOQV6tdxIVIiRc5i/dassLnOLGOn1kCNCncxxTqtouf7bjlmBJTYZDd+PBPSaXGLxE73JQ+ySlj/y9cS34FLHfkt9UM/yZQ+HP0DDcZ1l4N6DQ9rEKfGKXvgnjwar6KxoAxlqZ4LWNhkFr6y70vgj50fxW1uhTD/ZgkKPt9Vh9SkX0tQhrLm/oAK86+VAEBBDuHUSvE9OICXzQCbtoGC+/LbZiBvwBHdbSELYwVYboa9wOi215b0oBcrAd+qRO/QIWZ5p6uFOjVaf4SUajv+Asq98OnzvIODM263Qvnm/Y9eRIWRyfc3fQPleiRMdiU8RoRR7UvpKqFefrjgba4YNV3VIH0I9XK9lV2kYyIyRExFu8UfgfLNN9L4l0EmeFz/Z6JF4DGoWThRhvW+qWVbjHa78mz89FWQN0B5oUK4vT+3azMMWsN35Z+EekD+AYvHY9AwLmiIAAAAAElFTkSuQmCC"}
                    alt={job.title}
                    className="w-12 h-12 border-1 rounded-3xl mb-4"
                />
                <span className='-mt-2'>{job.companyName}</span>
            </div>
            <span className="absolute top-4 right-4 bg-blue-300 text-badgeText text-xs px-2 py-1 rounded-lg">
                {getTimeAgo(job.createdAt)}
            </span>
            <h2 className="font-semibold text-lg mb-2">{job.title}</h2>
            <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                <div className="flex items-center space-x-1 ">
                    <span>{job.requirements || "1-3 yr Exp"}</span>
                </div>
                <div className="flex items-center space-x-1 ">
                    <span>{job.jobType}</span>
                </div>
                <div className="flex flex-col items-center space-x-1">
                    <span>{"Min:" + job.salaryMin}</span>
                    <span>{"Max:" + job.salaryMax}</span>
                </div>
            </div>
            <ul className="flex-1 space-y-2 mb-4 list-disc list-inside text-gray-600 text-sm">
                <li>{job.description}</li>
            </ul>
            <button className="mt-auto bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-300 transition cursor-pointer">
                Apply Now
            </button>
        </div>
    );
}
