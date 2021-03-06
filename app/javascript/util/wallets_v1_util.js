export const addCoin = (symbol) => (
    $.ajax({
        type: "POST",
        url: '/v1/coins',
        data: {coin:{name:symbol}}
        // success: success,
        // dataType: json
    })
    // .then(r=>console.log(r))
);

export const removeCoin = (id) => (
    $.ajax({
        type: "DELETE",
        url: `/v1/coins/${id}`,
    })
);

export const fetchHistory = (sym) => (
    $.ajax({
        url: `https://raw.githubusercontent.com/bppandre/apitest/master/${sym}.json`,
        dataType: 'json'
    })
       
);
