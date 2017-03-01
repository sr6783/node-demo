/**
 * Created by sunrui on 2017/2/27.
 */
//当我们的输入输出有中文的时候,可能会乱码的问题,这是因为编码不同造成的
//这种情况,需要显示设置编码
process.stdin.setEncoding('utf8');
process.stdout.setEncoding('utf8');
process.stderr.setEncoding('utf8');
