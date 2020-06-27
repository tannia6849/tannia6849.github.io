let res = numpow(2)(5);
console.log(res);

function numpow(n)
{
   return(m) => {
        if (m == 0)
            return 1;
        if (m == 1)
            return n;
        return n * numpow(n)(m - 1);
    }
}
