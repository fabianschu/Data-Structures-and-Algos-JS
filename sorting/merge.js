const merge = (n, m) => {
    let tmp = [];
    let i = 0;
    let j = 0;

    while(i < n.length || j < m.length){
        if (n[i] < m[j]) {
            tmp.push(n[i]);
            i++;
        }
        else if (n[i] > m[j]) {
            tmp.push(m[j]);
            j++;
        }
        else {
            if(n[i]) {
                tmp.push(n[i]);
                i++;
            }
            if(m[j]) {
                tmp.push(m[j]);
                j++;
            }
        }
    }

    return tmp;
}

module.exports.merge = merge;